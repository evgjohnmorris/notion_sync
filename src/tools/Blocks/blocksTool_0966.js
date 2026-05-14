/**
 * Generated Tool: blocksTool_0966
 * Domain: Blocks
 * ID: 0966
 */
exports.blocksTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0966:', error);
    throw error;
  }
};
