/**
 * Generated Tool: searchTool_0620
 * Domain: Search
 * ID: 0620
 */
exports.searchTool_0620 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0620:', error);
    throw error;
  }
};
