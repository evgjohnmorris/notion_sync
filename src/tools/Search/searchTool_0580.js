/**
 * Generated Tool: searchTool_0580
 * Domain: Search
 * ID: 0580
 */
exports.searchTool_0580 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0580:', error);
    throw error;
  }
};
