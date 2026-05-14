/**
 * Generated Tool: searchTool_0103
 * Domain: Search
 * ID: 0103
 */
exports.searchTool_0103 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0103:', error);
    throw error;
  }
};
