/**
 * Generated Tool: workspacesTool_0603
 * Domain: Workspaces
 * ID: 0603
 */
exports.workspacesTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0603:', error);
    throw error;
  }
};
