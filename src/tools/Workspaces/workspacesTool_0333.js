/**
 * Generated Tool: workspacesTool_0333
 * Domain: Workspaces
 * ID: 0333
 */
exports.workspacesTool_0333 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0333:', error);
    throw error;
  }
};
