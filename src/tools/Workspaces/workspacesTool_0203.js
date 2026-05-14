/**
 * Generated Tool: workspacesTool_0203
 * Domain: Workspaces
 * ID: 0203
 */
exports.workspacesTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0203:', error);
    throw error;
  }
};
