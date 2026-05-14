/**
 * Generated Tool: workspacesTool_0378
 * Domain: Workspaces
 * ID: 0378
 */
exports.workspacesTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0378:', error);
    throw error;
  }
};
