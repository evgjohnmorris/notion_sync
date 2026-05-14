/**
 * Generated Tool: searchTool_0718
 * Domain: Search
 * ID: 0718
 */
exports.searchTool_0718 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0718:', error);
    throw error;
  }
};
