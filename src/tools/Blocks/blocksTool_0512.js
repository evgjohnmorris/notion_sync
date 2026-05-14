/**
 * Generated Tool: blocksTool_0512
 * Domain: Blocks
 * ID: 0512
 */
exports.blocksTool_0512 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0512:', error);
    throw error;
  }
};
