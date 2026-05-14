/**
 * Generated Tool: blocksTool_0814
 * Domain: Blocks
 * ID: 0814
 */
exports.blocksTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0814:', error);
    throw error;
  }
};
