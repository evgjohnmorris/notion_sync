/**
 * Generated Tool: searchTool_0766
 * Domain: Search
 * ID: 0766
 */
exports.searchTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0766:', error);
    throw error;
  }
};
