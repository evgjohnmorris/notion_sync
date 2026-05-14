/**
 * Generated Tool: databasesTool_0713
 * Domain: Databases
 * ID: 0713
 */
exports.databasesTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0713:', error);
    throw error;
  }
};
