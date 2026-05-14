/**
 * Generated Tool: searchTool_0855
 * Domain: Search
 * ID: 0855
 */
exports.searchTool_0855 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0855:', error);
    throw error;
  }
};
