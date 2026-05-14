/**
 * Generated Tool: searchTool_0555
 * Domain: Search
 * ID: 0555
 */
exports.searchTool_0555 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0555:', error);
    throw error;
  }
};
