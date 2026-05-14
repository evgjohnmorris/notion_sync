/**
 * Generated Tool: blocksTool_0726
 * Domain: Blocks
 * ID: 0726
 */
exports.blocksTool_0726 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0726:', error);
    throw error;
  }
};
