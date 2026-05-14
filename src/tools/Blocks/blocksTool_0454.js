/**
 * Generated Tool: blocksTool_0454
 * Domain: Blocks
 * ID: 0454
 */
exports.blocksTool_0454 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0454:', error);
    throw error;
  }
};
