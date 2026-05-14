/**
 * Generated Tool: searchTool_0197
 * Domain: Search
 * ID: 0197
 */
exports.searchTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0197:', error);
    throw error;
  }
};
