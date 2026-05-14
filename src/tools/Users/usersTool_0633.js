/**
 * Generated Tool: usersTool_0633
 * Domain: Users
 * ID: 0633
 */
exports.usersTool_0633 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0633:', error);
    throw error;
  }
};
