/**
 * Generated Tool: searchTool_0773
 * Domain: Search
 * ID: 0773
 */
exports.searchTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0773:', error);
    throw error;
  }
};
