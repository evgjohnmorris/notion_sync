/**
 * Generated Tool: searchTool_0396
 * Domain: Search
 * ID: 0396
 */
exports.searchTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0396:', error);
    throw error;
  }
};
