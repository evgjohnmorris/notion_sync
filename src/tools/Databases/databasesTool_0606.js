/**
 * Generated Tool: databasesTool_0606
 * Domain: Databases
 * ID: 0606
 */
exports.databasesTool_0606 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0606:', error);
    throw error;
  }
};
