/**
 * Generated Tool: blocksTool_0126
 * Domain: Blocks
 * ID: 0126
 */
exports.blocksTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0126:', error);
    throw error;
  }
};
