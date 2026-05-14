/**
 * Generated Tool: searchTool_0890
 * Domain: Search
 * ID: 0890
 */
exports.searchTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0890:', error);
    throw error;
  }
};
