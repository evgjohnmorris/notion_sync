/**
 * Generated Tool: workspacesTool_0954
 * Domain: Workspaces
 * ID: 0954
 */
exports.workspacesTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0954:', error);
    throw error;
  }
};
