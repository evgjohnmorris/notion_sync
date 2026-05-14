/**
 * Generated Tool: searchTool_0777
 * Domain: Search
 * ID: 0777
 */
exports.searchTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0777:', error);
    throw error;
  }
};
