/**
 * Generated Tool: workspacesTool_0499
 * Domain: Workspaces
 * ID: 0499
 */
exports.workspacesTool_0499 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0499:', error);
    throw error;
  }
};
