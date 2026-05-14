/**
 * Generated Tool: searchTool_0091
 * Domain: Search
 * ID: 0091
 */
exports.searchTool_0091 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0091:', error);
    throw error;
  }
};
