/**
 * Generated Tool: searchTool_0886
 * Domain: Search
 * ID: 0886
 */
exports.searchTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0886:', error);
    throw error;
  }
};
