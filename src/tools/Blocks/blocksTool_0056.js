/**
 * Generated Tool: blocksTool_0056
 * Domain: Blocks
 * ID: 0056
 */
exports.blocksTool_0056 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0056:', error);
    throw error;
  }
};
