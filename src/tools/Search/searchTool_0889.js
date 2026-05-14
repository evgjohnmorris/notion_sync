/**
 * Generated Tool: searchTool_0889
 * Domain: Search
 * ID: 0889
 */
exports.searchTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0889:', error);
    throw error;
  }
};
