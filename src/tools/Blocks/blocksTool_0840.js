/**
 * Generated Tool: blocksTool_0840
 * Domain: Blocks
 * ID: 0840
 */
exports.blocksTool_0840 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0840:', error);
    throw error;
  }
};
