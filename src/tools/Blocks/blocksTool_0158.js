/**
 * Generated Tool: blocksTool_0158
 * Domain: Blocks
 * ID: 0158
 */
exports.blocksTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0158:', error);
    throw error;
  }
};
