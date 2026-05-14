/**
 * Generated Tool: searchTool_0996
 * Domain: Search
 * ID: 0996
 */
exports.searchTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0996:', error);
    throw error;
  }
};
