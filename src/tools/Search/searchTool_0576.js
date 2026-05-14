/**
 * Generated Tool: searchTool_0576
 * Domain: Search
 * ID: 0576
 */
exports.searchTool_0576 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0576:', error);
    throw error;
  }
};
