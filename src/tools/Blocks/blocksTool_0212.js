/**
 * Generated Tool: blocksTool_0212
 * Domain: Blocks
 * ID: 0212
 */
exports.blocksTool_0212 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0212:', error);
    throw error;
  }
};
