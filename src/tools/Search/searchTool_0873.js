/**
 * Generated Tool: searchTool_0873
 * Domain: Search
 * ID: 0873
 */
exports.searchTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0873:', error);
    throw error;
  }
};
