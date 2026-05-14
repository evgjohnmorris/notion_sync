/**
 * Generated Tool: usersTool_0603
 * Domain: Users
 * ID: 0603
 */
exports.usersTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0603:', error);
    throw error;
  }
};
