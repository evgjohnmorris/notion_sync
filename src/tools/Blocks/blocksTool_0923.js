/**
 * Generated Tool: blocksTool_0923
 * Domain: Blocks
 * ID: 0923
 */
exports.blocksTool_0923 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0923:', error);
    throw error;
  }
};
