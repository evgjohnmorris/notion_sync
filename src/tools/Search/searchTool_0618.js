/**
 * Generated Tool: searchTool_0618
 * Domain: Search
 * ID: 0618
 */
exports.searchTool_0618 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0618:', error);
    throw error;
  }
};
