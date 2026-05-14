/**
 * Generated Tool: searchTool_0174
 * Domain: Search
 * ID: 0174
 */
exports.searchTool_0174 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0174:', error);
    throw error;
  }
};
