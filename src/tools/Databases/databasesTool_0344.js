/**
 * Generated Tool: databasesTool_0344
 * Domain: Databases
 * ID: 0344
 */
exports.databasesTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0344:', error);
    throw error;
  }
};
