/**
 * Generated Tool: workspacesTool_0996
 * Domain: Workspaces
 * ID: 0996
 */
exports.workspacesTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0996:', error);
    throw error;
  }
};
