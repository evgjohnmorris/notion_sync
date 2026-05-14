/**
 * Generated Tool: blocksTool_0861
 * Domain: Blocks
 * ID: 0861
 */
exports.blocksTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0861:', error);
    throw error;
  }
};
