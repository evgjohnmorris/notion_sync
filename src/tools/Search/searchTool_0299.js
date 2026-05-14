/**
 * Generated Tool: searchTool_0299
 * Domain: Search
 * ID: 0299
 */
exports.searchTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0299:', error);
    throw error;
  }
};
