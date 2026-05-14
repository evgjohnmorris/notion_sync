/**
 * Generated Tool: searchTool_0039
 * Domain: Search
 * ID: 0039
 */
exports.searchTool_0039 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0039:', error);
    throw error;
  }
};
