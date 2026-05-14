/**
 * Generated Tool: usersTool_0766
 * Domain: Users
 * ID: 0766
 */
exports.usersTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0766:', error);
    throw error;
  }
};
