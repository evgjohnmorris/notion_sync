/**
 * Generated Tool: databasesTool_0169
 * Domain: Databases
 * ID: 0169
 */
exports.databasesTool_0169 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0169:', error);
    throw error;
  }
};
