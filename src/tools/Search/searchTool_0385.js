/**
 * Generated Tool: searchTool_0385
 * Domain: Search
 * ID: 0385
 */
exports.searchTool_0385 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0385:', error);
    throw error;
  }
};
