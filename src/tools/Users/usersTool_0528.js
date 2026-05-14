/**
 * Generated Tool: usersTool_0528
 * Domain: Users
 * ID: 0528
 */
exports.usersTool_0528 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0528:', error);
    throw error;
  }
};
