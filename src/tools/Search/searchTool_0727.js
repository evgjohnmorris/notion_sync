/**
 * Generated Tool: searchTool_0727
 * Domain: Search
 * ID: 0727
 */
exports.searchTool_0727 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0727:', error);
    throw error;
  }
};
