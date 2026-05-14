/**
 * Generated Tool: databasesTool_0996
 * Domain: Databases
 * ID: 0996
 */
exports.databasesTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0996:', error);
    throw error;
  }
};
