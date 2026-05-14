/**
 * Generated Tool: searchTool_0633
 * Domain: Search
 * ID: 0633
 */
exports.searchTool_0633 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0633:', error);
    throw error;
  }
};
