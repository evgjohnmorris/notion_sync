/**
 * Generated Tool: searchTool_0263
 * Domain: Search
 * ID: 0263
 */
exports.searchTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0263:', error);
    throw error;
  }
};
